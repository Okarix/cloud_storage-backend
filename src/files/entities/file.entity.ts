import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

export enum FileType {
  PHOTOS = 'photos',
  TRASH = 'trash',
}

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  originalName: string;

  @Column()
  size: number;

  @Column()
  mimetype: string;

  @ManyToOne(() => UserEntity, (user) => user.files)
  user: UserEntity;

  @DeleteDateColumn()
  deletedAt?: Date;
}
