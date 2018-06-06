import { RestClientInterface } from '../../RestClient/RestClientInterface';

export class PoolContract {
    constructor(private restClient: RestClientInterface) {}

    // GET: Queries
    CountPoolContractUsers(poolId: string): any {
        return this.restClient.get('PoolContract/UseCase/CountPoolContractUsers', {
            poolId
        }    );
    }

    GetEmailCountsForPoolContract(poolId: string): any {
        return this.restClient.get('PoolContract/UseCase/GetEmailCountsForPoolContract', {
            poolId
        }    );
    }

    // POST USE CASES: Commands
}
