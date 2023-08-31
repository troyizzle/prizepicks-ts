export type League = {
  type: string;
  id: string;
  attributes: {
    active: boolean;
    icon: string;
    image_url: string;
    last_five_games_enabled: boolean;
    league_icon_id?: number | null;
    name: string;
    projections_count: number;
    rank: number;
  };
  relationships: {
    projection_filters: {
      data: ProjectionFilter[];
    };
  };
};

export type ProjectionFilter = {
  type: string;
  id: string;
};


export type LeaguesResponse = {
  data: League[],
  included: {
    type: "projection_filter",
    id: string,
    attributes: {
      lfg_ignored_leagues: number[],
      name: string,
      rank: null,
      type: string
    },
  }[],
}
