import { object, string } from 'yup';

export default object({
    body: object({
        urlToTransform: string()
            .url("Must be valid URL")
            .required("URL that needs to be shorter is required"),
    }),
});