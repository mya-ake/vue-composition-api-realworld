export namespace API {
  export namespace Authentication {
    export interface LoginRequest {
      user: {
        email: string;
        password: string;
      };
    }
    export interface RegistrationRequest {
      user: {
        username: string;
        email: string;
        password: string;
      };
    }
    export interface Response {
      user: {
        email: string;
        token: string;
        username: string;
        bio: string;
        image: string | null;
      };
    }
  }
  export namespace Error {
    export interface Response {
      errors: {
        [key: string]: string[];
      };
    }
  }
}
