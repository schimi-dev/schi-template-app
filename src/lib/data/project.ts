import 'server-only'
import { WithId, Document, ObjectId, Sort } from "mongodb";
import { cache } from "react";
import { Project, TProjectSettings } from "@/types/project";
import clientPromise from "./clientPromise";

export const findProjects = cache(async (userAccountId: string, userAccountProvider: string) => {
    const _projectCollection = await getProjectCollection();
    let sortObj: Sort = {
        createdAt: -1,
        _id: 1,
    };
    const _projects = await _projectCollection
        .find({
            $and: [
                { userAccountId },
                { userAccountProvider },
            ]
        })
        .sort(sortObj)
        .toArray();
    return _projects.map(x => toProject(x));
});

export const findProject = cache(async (id: string, userAccountId: string, userAccountProvider: string) => {
    const projectQuery = {
        $and: [
            { _id: new ObjectId(id) },
            { userAccountId },
            { userAccountProvider },
        ]
    };
    const _projectCollection = await getProjectCollection();
    const _project = await _projectCollection.findOne(projectQuery);
    if (!_project) {
        console.error(`Could not find project with id ${id}`);
        return null;
    }
    return toProject(_project);
});


export const createProject = async (data: TProjectSettings, userAccountId: string, userAccountProvider: string) => {
    const _projectCollection = await getProjectCollection();
    const now = new Date();
    const { insertedId } = await _projectCollection.insertOne({
        ...data,
        createdAt: now,
        lastUpdate: now,
        userAccountId,
        userAccountProvider,
    });
    return insertedId.toString();
};

export const updateProject = async (id: string, data: TProjectSettings, userAccountId: string, userAccountProvider: string) => {
    const projectQuery = {
        $and: [
            { _id: new ObjectId(id) },
            { userAccountId },
            { userAccountProvider },
        ]
    };
    const _projectCollection = await getProjectCollection();
    const patchOp = {
        $set: { ...data, lastUpdate: new Date() }
    };
    const _project = await _projectCollection.findOneAndUpdate(projectQuery, patchOp, { returnDocument: "after" });
    if (!_project.value){
        console.error(`Could not find and update project with id ${id}`);
        return null;
    }
    return toProject(_project.value);
};

export const deleteProject = async (id: string, userAccountId: string, userAccountProvider: string) => {
    const projectQuery = {
        $and: [
            { _id: new ObjectId(id) },
            { userAccountId },
            { userAccountProvider },
        ]
    };
    const _projectCollection = await getProjectCollection();
    await _projectCollection.deleteOne(projectQuery);
};

const toProject = (projectDocument: WithId<Document>) => {
    const { _id, ...rest } = projectDocument;
    const project = Project.parse({ id: _id.toString(), ...rest });
    return project;
}

const getProjectCollection = async () => await clientPromise.then(client => client.db().collection("project"));
