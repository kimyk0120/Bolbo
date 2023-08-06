// noinspection SqlDialectInspection,SqlNoDataSourceInspection

export const mission_ddl =
  'CREATE TABLE IF NOT EXISTS MISSION (id	INTEGER	NOT NULL  PRIMARY KEY AUTOINCREMENT, name	varchar(250)	NOT NULL, level	INTEGER	NOT NULL, memo	varchar(3000)	NULL, reg_dt	date	NOT NULL, mod_dt	date	NULL, user_uuid	varchar(2000)	NOT NULL);';

export const mission_media_ddl =
  'CREATE TABLE IF NOT EXISTS MISSION_MEDIA (id	INTEGER	NOT NULL PRIMARY KEY AUTOINCREMENT, mission_id	INTEGER	NOT NULL, type	varchar(250)	NOT NULL, path	varchar(2000)	NOT NULL, reg_dt	date	NOT NULL);';

export const mission_user_ddl =
  'CREATE TABLE IF NOT EXISTS USER (id	varchar(2000)	NOT NULL, name	varchar(300)	NULL, profile_image_path	varchar(2000)	NULL, reg_dt	date	NOT NULL, mod_dt	date	NULL);';
