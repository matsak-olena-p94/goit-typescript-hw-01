type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  function compare<Info extends Pick<AllType, "name" | "color" | "position" | "weight">> (top: Info, bottom: Info): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  }