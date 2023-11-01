export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "jobTitle",
            title: "Job title",
            type: "string",
        },
        {
            name: "startDate",
            title: "Start date",
            type: "string"
        },
        {
            name: "endDate",
            title: "End date",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }]
        }
    ]
}