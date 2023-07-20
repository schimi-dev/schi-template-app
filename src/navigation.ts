const login = "/login" as const;
const dashboard = "/dashboard" as const;

const _singleProject = (id: string) => `${dashboard}/${id}` as const
const singleProjectOverview = (id: string) => `${_singleProject(id)}/overview` as const;
const singleProjectSettings = (id: string) => `${_singleProject(id)}/settings` as const;

const navigation = {
    login,
    dashboard,
    _singleProject,
    singleProjectOverview,
    singleProjectSettings
}

export default navigation