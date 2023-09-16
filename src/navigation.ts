const login = "/login" as const;
const projects = "/projects" as const;

const _singleProject = (id: string) => `${projects}/${id}` as const
const singleProjectOverview = (id: string) => `${_singleProject(id)}/overview` as const;
const singleProjectBuild = (id: string) => `${_singleProject(id)}/build` as const;
const singleProjectAnalytics = (id: string) => `${_singleProject(id)}/analytics` as const;
const singleProjectSettings = (id: string) => `${_singleProject(id)}/settings` as const;

const navigation = {
    login,
    projects,
    singleProjectOverview,
    singleProjectBuild,
    singleProjectAnalytics,
    singleProjectSettings
}

export default navigation
