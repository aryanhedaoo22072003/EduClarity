import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./user.model";

interface IComment extends Document {
  user: IUser;
  question: string;
  questionReplies: IComment[];
}
interface IReview extends Document {
  user: IUser;
  rating?: number;
  comment: string;
  commentReplies?: IReview[];
}

interface ILink extends Document {
  title: string;
  url: string;
}

interface ICourseData extends Document {
  title: string;
  description: string;
  videoUrl: string;
  videoThumbnail: string;//object
  videoSection: string;
  videoLength: number;
  videoPlayer: string;
  links: ILink[];
  sugggestion: string;
  questions: IComment[];
}

interface ICourse extends Document {
  _id:mongoose.Types.ObjectId; 
  name: string;
  description: string;
  categories:string[];
  price: number;
  estimatedPrice?: number;
  thumbnail: {
    url: string;
    public_id:string;
  };
  tags: string[];
  level: string;
  demoUrl: string;
  benefits: { title: string }[];
  prerequisites: { title: string }[];
  reviews: IReview[];
  courseData: ICourseData[];
  ratings?: number;
  purchased?: number;
}

const reviewSchema = new Schema<IReview>({
  user: Object,
  rating: {
    type: Number,
    default: 0,
  },
  comment: String,
  commentReplies:[Object],
},{timestamps:true});

const linkSchema = new Schema<ILink>({
  title: String,
  url: String,
});

const commentSchema = new Schema<IComment>({
  user: Object,
  question: String,
  questionReplies: [Object],
},{timestamps:true});

const courseDataSchema = new Schema<ICourseData>({
  videoUrl: String,
  videoThumbnail: String,//object
  title: String,
  videoSection: String,
  description: String,
  videoLength: Number,
  links: [linkSchema],
  sugggestion: String,
  questions: [commentSchema],
});

const courseSchema = new Schema<ICourse>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories:{
    type:[String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  estimatedPrice: {
    type: Number,
  },
  thumbnail: {
    public_id: {
      
      type: String,
    },
    url: {
      
      type: String,
    },
  },
  tags: {
    type: [String],
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  demoUrl: {
    type: String,
    required: true,
  },
  benefits: [{ title: String }],
  prerequisites: [{ title: String }],
  reviews: [reviewSchema],
  courseData: [courseDataSchema],
  ratings: {
    type: Number,
    default: 0,
  },
  purchased: {
    type: Number,
    default: 0,
  },
},{timestamps:true});

const CourseModel: Model<ICourse> = mongoose.model("Course", courseSchema);

export default CourseModel;
