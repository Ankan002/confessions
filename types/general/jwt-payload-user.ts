import { JwtPayload } from "jsonwebtoken";

export interface JwtPayloadUser extends JwtPayload {
  id: string;
  email: string;
}
