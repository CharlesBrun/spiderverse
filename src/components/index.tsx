import { IHeroData } from "@/interfaces/heroes";
import React from "react";

interface IProps {
  heroes: IHeroData[];
}

const HeroesList = ({ heroes }: IProps) => {
  return (
    <>
      <h1>Personagens</h1>
      {heroes.map((hero) => (
        <p key={hero.id}>{hero.name}</p>
      ))}
    </>
  );
};

export default HeroesList;
