CREATE TABLE public.users (
	"id" serial NOT NULL UNIQUE,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"updated_at" TIMESTAMP,
	"logged_at" TIMESTAMP,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.users_info (
	"user_id" integer NOT NULL UNIQUE,
	"nickname" varchar(255) NOT NULL,
	"currency" real NOT NULL,
	"last_character" integer,
	CONSTRAINT "users_info_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.characters (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	"price" real NOT NULL,
	CONSTRAINT "characters_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.skills (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	"type" integer NOT NULL,
	"description" varchar(255) NOT NULL,
	"price" real,
	"delay" real,
	"cost" real,
	CONSTRAINT "skills_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.items (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	"price" real NOT NULL,
	"stacks" integer,
	CONSTRAINT "items_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.matchs (
	"id" serial NOT NULL,
	"type" varchar(255) NOT NULL,
	"date" varchar(255) NOT NULL,
	"duration" real NOT NULL,
	CONSTRAINT "matchs_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.user_characters (
	"user_id" integer NOT NULL,
	"character_id" integer NOT NULL,
	CONSTRAINT "user_characters_pk" PRIMARY KEY ("user_id","character_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.character_skills (
	"character_id" integer NOT NULL,
	"skill_id" integer NOT NULL,
	"level" integer NOT NULL,
	CONSTRAINT "character_skills_pk" PRIMARY KEY ("character_id","skill_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.match_users (
	"user_id" integer NOT NULL,
	"match_id" integer NOT NULL,
	"team" integer NOT NULL,
	"level" real NOT NULL,
	"score" real NOT NULL,
	"state" varchar(255) NOT NULL,
	"character" integer NOT NULL,
	CONSTRAINT "match_users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.effects (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	"data" varchar NOT NULL,
	"description" varchar(255) NOT NULL,
	"time" real,
	CONSTRAINT "effects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.skill_effects (
	"id" serial NOT NULL,
	"skill_id" integer NOT NULL,
	"level" integer NOT NULL,
	"effect_id" integer NOT NULL,
	CONSTRAINT "skill_effects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.item_effects (
	"id" serial NOT NULL,
	"item_id" integer NOT NULL,
	"effect_id" integer NOT NULL
	CONSTRAINT "item_effects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.match_teams (
	"id" serial NOT NULL,
	"match_id" integer NOT NULL,
	"team_number" integer NOT NULL,
	"score" real NOT NULL,
	"winner" BOOLEAN NOT NULL,
	CONSTRAINT "match_teams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "users_info" ADD CONSTRAINT "users_info_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "users_info" ADD CONSTRAINT "users_info_fk1" FOREIGN KEY ("last_character") REFERENCES "characters"("id");





ALTER TABLE "user_characters" ADD CONSTRAINT "user_characters_fk0" FOREIGN KEY ("user_id") REFERENCES "users_info"("user_id");
ALTER TABLE "user_characters" ADD CONSTRAINT "user_characters_fk1" FOREIGN KEY ("character_id") REFERENCES "characters"("id");

ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_fk0" FOREIGN KEY ("character_id") REFERENCES "characters"("id");
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_fk1" FOREIGN KEY ("skill_id") REFERENCES "skills"("id");

ALTER TABLE "match_users" ADD CONSTRAINT "match_users_fk0" FOREIGN KEY ("user_id") REFERENCES "users_info"("user_id");
ALTER TABLE "match_users" ADD CONSTRAINT "match_users_fk1" FOREIGN KEY ("match_id") REFERENCES "matchs"("id");
ALTER TABLE "match_users" ADD CONSTRAINT "match_users_fk2" FOREIGN KEY ("team") REFERENCES "match_teams"("id");
ALTER TABLE "match_users" ADD CONSTRAINT "match_users_fk3" FOREIGN KEY ("character") REFERENCES "characters"("id");


ALTER TABLE "skill_effects" ADD CONSTRAINT "skill_effects_fk0" FOREIGN KEY ("skill_id") REFERENCES "skills"("id");
ALTER TABLE "skill_effects" ADD CONSTRAINT "skill_effects_fk1" FOREIGN KEY ("effect_id") REFERENCES "effects"("id");

ALTER TABLE "match_teams" ADD CONSTRAINT "match_teams_fk0" FOREIGN KEY ("match_id") REFERENCES "matchs"("id");













