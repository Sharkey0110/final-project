export default {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "description",
            title: "Brief description",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        }
    ]
}