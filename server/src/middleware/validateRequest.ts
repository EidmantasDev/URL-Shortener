import { AnyObjectSchema } from "yup";
import { Request, Response, NextFunction } from 'express';

const validateRequest = (requestSchema: AnyObjectSchema) =>
    async (
        req :Request, res: Response, next: NextFunction
    ) => {
        try {
            await requestSchema.validate({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            next();
        } catch (error) {
            return res.status(400).send(error);
        }
};

export default validateRequest;