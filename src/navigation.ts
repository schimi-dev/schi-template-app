const login = "/login" as const;
const dashboard = "/dashboard" as const;
const newProject = "/new" as const;

const _singleProject = (id: string) => `${dashboard}/${id}` as const
const singleProjectOverview = (id: string) => `${_singleProject(id)}/overview` as const;
const singleProjectBuild = (id: string) => `${_singleProject(id)}/build` as const;
const singleProjectAnalytics = (id: string) => `${_singleProject(id)}/analytics` as const;
const singleProjectSettings = (id: string) => `${_singleProject(id)}/settings` as const;

const navigation = {
    login,
    dashboard,
    newProject,
    _singleProject,
    singleProjectOverview,
    singleProjectBuild,
    singleProjectAnalytics,
    singleProjectSettings
}

export default navigation