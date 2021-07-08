import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('announcements')
export class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tenant_id: number;

  @Column()
  description: string;

  @Column()
  recording_id: number;

  // @Column()
  // recording_name: string;

  @Column()
  allow_skip: boolean;

  @Column()
  post_destination: string;

  @Column()
  return_ivr: boolean;

  @Column()
  no_answer: boolean;

  @Column()
  repeat_msg: string;
}
