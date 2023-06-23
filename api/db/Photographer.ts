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

@Entity({ name: "photographer", synchronize: false })
class Photographer extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int4" })
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", nullable: true })
  location: string;

  @Column({ type: "varchar", nullable: true })
  bio: string;

  @Column({ type: "varchar", nullable: true })
  profile_image_url: string;

  @Column({ type: "varchar", nullable: true })
  twtter_username: string;

  @Column({ type: "varchar", nullable: true })
  instagram_username: string;

  @OneToMany(() => Photo, (ph) => ph.photographer_id)
  photos: Photo[];

  asAPIObject() {
    return {
      id: this.id,
      name: this.name,
      location: this.location,
      bio: this.bio,
      profile_image_url: this.profile_image_url,
      twtter_username: this.twtter_username,
      instagram_username: this.instagram_username,
    };
  }
}

export default Photographer;
