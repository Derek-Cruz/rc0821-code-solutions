SELECT "firstName",
       "lastName",
       "films"."title" AS "title"
  FROM "actors"
  JOIN "castMembers" USING ("actorId")
  JOIN "films" USING ("filmId")
  WHERE "title" = 'Jersey Sassy';
