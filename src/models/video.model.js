import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSChema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // cloudinary public_id or URL
            required: true,
        },

        thumbnail: {
            type: String, // cloudinary public_id or URL
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        duration: {
            type: Number, // cloudinary
            required: true,
        },

        views: {
            type: Number,
            default: 0,
        },

        isPublished: {
            type: Boolean,
            default: true,
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    }, 
    { timestamps: true }
);

videoSChema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSChema);