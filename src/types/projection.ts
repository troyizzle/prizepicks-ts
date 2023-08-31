export type Projection = {
  type: string;
  id: string;
  attributes: {
    board_time: string;
    custom_image: null | string;
    description: string;
    discount_percentage: number | null;
    end_time: null | string;
    flash_sale_line_score: number | null;
    is_promo: boolean;
    line_score: number;
    projection_type: string;
    rank: number;
    refundable: boolean;
    start_time: string;
    stat_type: string;
    status: string;
    tv_channel: null | string;
    updated_at: string;
  };
  relationships: {
    duration: { data: null };
    league: { data: { type: string; id: string } };
    new_player: { data: { type: string; id: string } };
    projection_type: { data: { type: string; id: string } };
    stat_type: { data: { type: string; id: string } };
  };
}

export type ProjectionsResponse = {
  data: Projection[],
  included: [],
  links: {
    self: string,
  },
  meta: {
    current_page: number,
    total_pages: number
  }
}
