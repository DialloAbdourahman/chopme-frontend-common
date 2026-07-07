import { EnumStatusCode } from "../enums/response-status-code";
import { EnumStatusResponse } from "../enums/status-response";

export interface IOrchestrationResult<T> {
  readonly code: EnumStatusResponse;
  readonly statusCode: EnumStatusCode;
  readonly message: string | null;
  readonly data: T | null;
}
