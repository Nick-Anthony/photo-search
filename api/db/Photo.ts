import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Collection from "./Collection";
import Photographer from "./Photographer";

@Entity({ name: "photo", synchronize: false })
class Photo extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int4" })
  id: number;

  @ManyToOne(() => Photographer, (pg) => pg.photos)
  photographer_id?: Photographer;

  @ManyToOne(() => Collection, (co) => co.photos)
  collection_id?: Collection;

  @Column({ type: "varchar" })
  url: string;

  @Column({ type: "varchar", nullable: true })
  description?: string;

  @Column({ type: "int4" })
  height: number;

  @Column({ type: "int4" })
  width: number;

  asAPIObject() {
    return {
      id: this.id,
      photographer_id: this.photographer_id.asAPIObject(),
      collection_id: this.collection_id.asAPIObject(),
      url: this.url,
      description: this.description,
      height: this.height,
      width: this.width,
    };
  }
}

export default Photo;
