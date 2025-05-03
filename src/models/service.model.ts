import { models, Schema, model } from "mongoose";

interface IService {
    value: string;
}

const serviceSchema = new Schema<IService>({
    value: {
        type: String,
        required: true,
    },
});


const Service = models.Service || model('Service', serviceSchema);

export default Service;