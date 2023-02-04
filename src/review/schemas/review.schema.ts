import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { ApiPropertyOptional } from '@nestjs/swagger';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Review extends Document {
  @ApiPropertyOptional()
  @Prop({ required: true, unique: true, index: true })
  id: number;

  @ApiPropertyOptional()
  @Prop({ required: true, index: true })
  movieId: number;

  @ApiPropertyOptional()
  @Prop()
  title: string;

  @ApiPropertyOptional()
  @Prop()
  type: string;

  @ApiPropertyOptional()
  @Prop()
  review: string;

  @ApiPropertyOptional()
  @Prop()
  date: Date;

  @ApiPropertyOptional()
  @Prop()
  author: string;

  @Prop({ default: 0 })
  userRating: number;

  @ApiPropertyOptional()
  @Prop()
  authorId: number;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
