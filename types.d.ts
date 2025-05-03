import { Connection } from 'mongoose';

declare global {
  var mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  }
}

// Define proper types for Next.js pages with params
declare namespace NextPage {
  interface Params {
    id: string;
    [key: string]: string;
  }

  interface Props {
    params: Params;
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}

export {}
