import { Express, Request, Response } from 'express';
import ShortUrlModel from '../models/short-url.model';
import HistoryModel from '../models/history.model';

export async function createShortUrl(req: Request, res: Response){
    const { urlToTransform } = req.body;

    const shortUrl = await ShortUrlModel.create({ urlToTransform });

    return res.send(shortUrl);
}

export async function handleRedirect(req: Request, res: Response) {
    const { id } = req.params;

    const urlTransform = await ShortUrlModel.findOne({ id }).lean();

    if (!urlTransform) {
        return res.sendStatus(404);
    }

    HistoryModel.create({shortUrl: urlTransform._id });

    return res.redirect(urlTransform.urlToTransform);
}

export async function getHistory(req: Request, res: Response) {
    const historyData = await HistoryModel.find({}).lean();

    return res.send(historyData);
}