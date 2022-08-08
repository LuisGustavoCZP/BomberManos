CREATE TABLE public.users (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.user_last_action (
	"user_id" integer NOT NULL,
	"action" varchar(255) NOT NULL,
	CONSTRAINT "user_last_action_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.user_shopping_item (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"item" integer NOT NULL,
	"quanty" integer NOT NULL,
	CONSTRAINT "user_shopping_item_pk" PRIMARY KEY ("id","user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.items (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"image" varchar(255),
	CONSTRAINT "items_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.user_pageview (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"url" varchar(255) NOT NULL,
	"date" varchar(255) NOT NULL,
	CONSTRAINT "user_pageview_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "user_last_action" ADD CONSTRAINT "user_last_action_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "user_shopping_item" ADD CONSTRAINT "user_shopping_item_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "user_shopping_item" ADD CONSTRAINT "user_shopping_item_fk1" FOREIGN KEY ("item") REFERENCES "items"("id");


ALTER TABLE "user_pageview" ADD CONSTRAINT "user_pageview_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");





