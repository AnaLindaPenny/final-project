CREATE TABLE "imdb_movie_info" (
    "title" VARCHAR(200)   NOT NULL,
    "year" INT   NOT NULL,
    "genre" VARCHAR(200)   NOT NULL,
    "runtime" INT   NOT NULL,
    "mpa_rating" VARCHAR(20)   NOT NULL,
    "imdb_rating" DECIMAL NOT NULL,
    "imdb_gross" BIGINT   NOT NULL,
    "director" VARCHAR(70)   NOT NULL,
    "tomato_meter" INT   NOT NULL,
    "tom_aud_score" INT   NOT NULL,
    "entity" VARCHAR(200)   NOT NULL,
    "universe_code" INT,
    "id" INT   NOT NULL,
    "star_one" VARCHAR(200)   NOT NULL,
    "star_two" VARCHAR(200)   NOT NULL,
    "star_three" VARCHAR(200)   NOT NULL,
	"star_four" VARCHAR(200)   NOT NULL,
    CONSTRAINT "pk_imdb_movie_info" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "dceu_box_office" (
    "movie_code" INT   NOT NULL,
    "county_code" VARCHAR(20)   NOT NULL,
    "date" DATE,
    "opening" DECIMAL,
    "gross" DECIMAL
);
DROP TABLE mcu_box_office;
CREATE TABLE "mcu_box_office" (
    "movie_code" INT   NOT NULL,
    "county_code" VARCHAR(20)   NOT NULL,
    "date" DATE,
    "opening" DECIMAL,
    "gross" DECIMAL
);

CREATE TABLE "mcu_dceu_combined" (
    "universe_code" INT   NOT NULL,
    "universe_name" VARCHAR(50)   NOT NULL,
    "movie_code" INT   NOT NULL,
    "movie_name" VARCHAR(200)   NOT NULL,
    "country_code" INT   NOT NULL,
    "country_name" VARCHAR(500)   NOT NULL,
    "release_date" DATE,
    "opening" BIGINT,
    "gross" BIGINT
);

CREATE TABLE "movie_universe" (
    "universe_code" INT   NOT NULL,
    "universe_name" VARCHAR(200)   NOT NULL,
    CONSTRAINT "pk_movie_universe" PRIMARY KEY (
        "universe_code"
     )
);

CREATE TABLE "movie_codes" (
    "movie_name" VARCHAR(200)   NOT NULL,
    "movie_code" INT   NOT NULL,
    "universe_code" INT   NOT NULL,
    CONSTRAINT "pk_movie_codes" PRIMARY KEY (
        "movie_code"
     )
);

CREATE TABLE "country_codes" (
    "country_name" VARCHAR(200)   NOT NULL,
    "country_code" VARCHAR(20)   NOT NULL,
    CONSTRAINT "pk_country_codes" PRIMARY KEY (
        "country_code"
     )
);

CREATE TABLE "summation_codes" (
    "summation_code" INT   NOT NULL,
    "summation_name" VARCHAR(100)   NOT NULL,
    "country_code" VARCHAR(50)   NOT NULL,
    "affiliated_country_islands" VARCHAR(200)   NOT NULL
);
