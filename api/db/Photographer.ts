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
  profileImageUrl: string;

  @Column({ type: "varchar", nullable: true })
  twitterUsername: string;

  @Column({ type: "varchar", nullable: true })
  instagramUsername: string;

  @OneToMany(() => Photo, (ph) => ph.photographerId)
  photos: Photo[];

  asAPIObject() {
    return {
      id: this.id,
      name: this.name,
      location: this.location,
      bio: this.bio,
      profileImageUrl: this.profileImageUrl,
      twtterUsername: this.twitterUsername,
      instagramUsername: this.instagramUsername,
    };
  }
}

export default Photographer;
