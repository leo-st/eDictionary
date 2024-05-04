-- dynamic
DROP TABLE IF EXISTS public."Lexicon" CASCADE;
CREATE TABLE public."Lexicon" (
	"id" INTEGER GENERATED BY DEFAULT AS IDENTITY (START WITH 1 CYCLE),
	"word" varchar NULL,
	"article" varchar NULL,
	"translation" varchar NULL,
    "first_letter" varchar NULL,
    "description" varchar NULL,
	PRIMARY KEY ("id")
);