/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Queue {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @return Promise|Observable|any
   */
  GetAllJobs(): any {
    return this.restClient.get('Queue/UseCase/GetAllJobs', {});
  }

  /**
   * @param string - jobId
   * @return Promise|Observable|any
   */
  GetJob(jobId: string): any {
    return this.restClient.get('Queue/UseCase/GetJob', {
      jobId,
    });
  }

  /**
   * @param string - commandId
   * @param array? - withData QueueCommandErrors|QueueCommandMessages
   * @return Promise|Observable|any
   */
  GetQueueCommand(commandId: string, withData: any = null): any {
    return this.restClient.get('Queue/UseCase/GetQueueCommand', {
      commandId,
      withData,
    });
  }

  /**
   * @param string - queueTaskId
   * @param array? - withData QueueTaskErrors|QueueTaskMessages
   * @return Promise|Observable|any
   */
  GetQueueTask(queueTaskId: string, withData: any = null): any {
    return this.restClient.get('Queue/UseCase/GetQueueTask', {
      queueTaskId,
      withData,
    });
  }

  /**
   * @param string - userId
   * @param int? - page >= 1
   * @param int? - itemsPerPage 1-100
   * @param bool? - isFinished true|false
   * @param bool? - isSuccess true|false
   * @return Promise|Observable|any
   */
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

  // Commands

  /**
   * @param string - jobId
   * @return Promise|Observable|any
   */
  DeleteJob(jobId: string): any {
    return this.restClient.post('Queue/UseCase/DeleteJob', {
      jobId,
    });
  }
}
