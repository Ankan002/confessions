import { JwtPayload } from "jsonwebtoken";

export interface JwtPayloadUser extends JwtPayload {
  user: {
    id: string;
    email: string;
  };
}
