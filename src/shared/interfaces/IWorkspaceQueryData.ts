interface GadgetDataSpecifications {
    element: string
    specification: string
}
interface GadgetData {
    node: {
        name: string
        specifications: Array<GadgetDataSpecifications>
        image: string
    }
}

export interface WorkspaceData {
    allWorkspaceJson: {
        edges: Array<GadgetData>
    }
}