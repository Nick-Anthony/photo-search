import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Photo from "./Photo";

@Entity({ name: "collection", synchronize: false })
class Collection extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int4" })
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @OneToMany(() => Photo, (ph) => ph.collectionId)
  photos: Photo[];

  asAPIObject() {
    return {
      id: this.id,
      title: this.title,
    };
  }
}

export default Collection;
