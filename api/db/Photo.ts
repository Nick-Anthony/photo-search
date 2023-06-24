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

  @Column({ type: "int4" })
  photographerId: number;
  @ManyToOne(() => Photographer, (pg) => pg.photos)
  photographer: Photographer;

  @Column({ type: "int4" })
  collectionId: number;
  @ManyToOne(() => Collection, (co) => co.photos)
  collection: Collection;

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
      photographer: this.photographer.asAPIObject(),
      collection: this.collection.asAPIObject(),
      url: this.url,
      description: this.description,
      height: this.height,
      width: this.width,
    };
  }
}

export default Photo;
