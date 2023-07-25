'use client'

import { TProject } from "@/types/project";
import { useRouter, usePathname } from "next/navigation";
import navigation from "@/navigation";
import type { Route } from "next";
import { MdAddCircleOutline, MdUnfoldMore, MdCheck } from "react-icons/md";

export default function SelectProjectButton({ projects, project }: { projects: TProject[], project: TProject }) {

    const { push } = useRouter();
    const pathname = usePathname();

    const selectProject = (projectId: string) => {
        const segments = pathname.split("/").filter(x => x !== "");
        if (segments.length === 3) {
            // We are on the project level so we can just replace the project id
            segments[1] = projectId;
            push(`/${segments.join("/")}` as Route)
        }
        else {
            // We are not on the project level, so we go to the project overview of the selected project
            push(navigation.singleProjectOverview(projectId))
        }
    }

    return (
        <>
            <button className="h-10 w-7 rounded hover:bg-secondary-800 flex items-center justify-center" >
                <MdUnfoldMore className="h-6 w-6" />
            </button>
            {/* <MenuPopper
                open={open}
                onClickAway={closeMenu}
                placement={"bottom"}
                anchorEl={anchorEl}
                sx={{ mt: 1 }}
            >
                <Box p={2}>
                    <Typography variant="subtitle2">
                        Projects
                    </Typography>
                </Box>
                <Divider />
                <Box
                    sx={{
                        py: 1,
                        overflow: "auto",
                        minWidth: 240,
                        maxHeight: 240
                    }}
                >
                    <List dense disablePadding>
                        {projects.map(x => (
                            <ListItem key={x.id} dense disablePadding>
                                <ListItemButton
                                    disableRipple
                                    disableTouchRipple
                                    onClick={() => selectProject(x.id)}
                                >
                                    <ListItemIcon>
                                        <ProjectAvatar project={x} small />
                                    </ListItemIcon>
                                    <ListItemText primary={x.name} />
                                    <Box display="flex" minWidth={40} alignItems="center" justifyContent="right">
                                        {project.id === x.id && <CheckIcon fontSize="small" />}
                                    </Box>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider />
                <Box py={1}>
                    <List disablePadding dense>
                        <ListItem disablePadding dense>
                            <ListItemButton
                                disableRipple
                                disableTouchRipple
                                onClick={() => { closeMenu(); push(navigation.newProject); }}
                            >
                                <ListItemIcon sx={{ color: "info.main" }}>
                                    <AddCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText
                                    secondary={"Create Project"}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </MenuPopper> */}
        </>
    )
}