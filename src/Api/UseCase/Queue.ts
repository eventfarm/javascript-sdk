/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Queue {
  constructor(private restClient: RestClientInterface) {}

  // GET: Queries
  GetAllJobs(): any {
    return this.restClient.get('Queue/UseCase/GetAllJobs', {});
  }

  GetJob(jobId: string): any {
    return this.restClient.get('Queue/UseCase/GetJob', {
      jobId,
    });
  }

  GetQueueCommand(commandId: string, withData: any = null): any {
    return this.restClient.get('Queue/UseCase/GetQueueCommand', {
      commandId,
      withData,
    });
  }

  GetQueueTask(queueTaskId: string, withData: any = null): any {
    return this.restClient.get('Queue/UseCase/GetQueueTask', {
      queueTaskId,
      withData,
    });
  }

  ListQueueCommandsForUser(
    userId: string,
    page: number = null,
    itemsPerPage: number = null,
    isFinished: boolean = null,
    isSuccess: boolean = null,
  ): any {
    return this.restClient.get('Queue/UseCase/ListQueueCommandsForUser', {
      userId,
      page,
      itemsPerPage,
      isFinished,
      isSuccess,
    });
  }

  // POST USE CASES: Commands
  DeleteJob(jobId: string): any {
    return this.restClient.post('Queue/UseCase/DeleteJob', {
      jobId,
    });
  }
}
