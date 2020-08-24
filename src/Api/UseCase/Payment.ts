/**
 * This file was auto generated, please do not edit it directly.
 **/

import { RestClientInterface } from '../../Interfaces';

export class Payment {
  constructor(private restClient: RestClientInterface) {}

  // Queries

  /**
   * @param string - paymentId
   * @param string[]? - withData
   * @return Promise|Observable|any
   */
  GetPayment(paymentId: string, withData: string[] = null): any {
    return this.restClient.get('Payment/UseCase/GetPayment', {
      paymentId,
      withData,
    });
  }

  /**
   * @param string - eventId
   * @return Promise|Observable|any
   */
  GetPaymentTotalsForEvent(eventId: string): any {
    return this.restClient.get('Payment/UseCase/GetPaymentTotalsForEvent', {
      eventId,
    });
  }

  /**
   * @param string - eventId
   * @param string[]? - withData Refund|Purchase
   * @param number? - page >= 1
   * @param number? - itemsPerPage 1-100
   * @param string? - query
   * @param string? - sortBy
   * @param string? - sortDirection
   * @return Promise|Observable|any
   */
  ListPaymentsForEvent(
    eventId: string,
    withData: string[] = null,
    page: number = null,
    itemsPerPage: number = null,
    query: string = null,
    sortBy: string = null,
    sortDirection: string = null,
  ): any {
    return this.restClient.get('Payment/UseCase/ListPaymentsForEvent', {
      eventId,
      withData,
      page,
      itemsPerPage,
      query,
      sortBy,
      sortDirection,
    });
  }

  // Commands

  /**
   * @param string - eventId
   * @param string - type
   * @param string - transType
   * @param string? - billingFirstName
   * @param string? - billingLastName
   * @param string? - billingAddress1
   * @param string? - billingAddress2
   * @param string? - billingCity
   * @param string? - billingState
   * @param string? - billingPostalCode
   * @param string? - billingCountry
   * @param string? - billingEmail
   * @param string? - billingPhone
   * @param string? - shippingFirstName
   * @param string? - shippingLastName
   * @param string? - shippingAddress1
   * @param string? - shippingAddress2
   * @param string? - shippingCity
   * @param string? - shippingState
   * @param string? - shippingPostalCode
   * @param string? - shippingCountry
   * @param string? - cardType
   * @param string? - cardNumber
   * @param string? - cardExpMon
   * @param string? - cardExpYear
   * @param string? - processingCurrency
   * @param number? - amount
   * @param number? - donationAmount
   * @param number? - shippingAmount
   * @param number? - promotionAmount
   * @param string? - transId
   * @param string? - transResult
   * @param string? - transOrderRef
   * @param string? - transMerchantProfile
   * @param string? - memo
   * @param string? - invoiceNo
   * @param boolean? - isOutside true|false
   * @param string? - paymentId
   * @return Promise|Observable|any
   */
  CreatePayment(
    eventId: string,
    type: string,
    transType: string,
    billingFirstName: string = null,
    billingLastName: string = null,
    billingAddress1: string = null,
    billingAddress2: string = null,
    billingCity: string = null,
    billingState: string = null,
    billingPostalCode: string = null,
    billingCountry: string = null,
    billingEmail: string = null,
    billingPhone: string = null,
    shippingFirstName: string = null,
    shippingLastName: string = null,
    shippingAddress1: string = null,
    shippingAddress2: string = null,
    shippingCity: string = null,
    shippingState: string = null,
    shippingPostalCode: string = null,
    shippingCountry: string = null,
    cardType: string = null,
    cardNumber: string = null,
    cardExpMon: string = null,
    cardExpYear: string = null,
    processingCurrency: string = null,
    amount: number = null,
    donationAmount: number = null,
    shippingAmount: number = null,
    promotionAmount: number = null,
    transId: string = null,
    transResult: string = null,
    transOrderRef: string = null,
    transMerchantProfile: string = null,
    memo: string = null,
    invoiceNo: string = null,
    isOutside: boolean = null,
    paymentId: string = null,
  ): any {
    return this.restClient.post('Payment/UseCase/CreatePayment', {
      eventId,
      type,
      transType,
      billingFirstName,
      billingLastName,
      billingAddress1,
      billingAddress2,
      billingCity,
      billingState,
      billingPostalCode,
      billingCountry,
      billingEmail,
      billingPhone,
      shippingFirstName,
      shippingLastName,
      shippingAddress1,
      shippingAddress2,
      shippingCity,
      shippingState,
      shippingPostalCode,
      shippingCountry,
      cardType,
      cardNumber,
      cardExpMon,
      cardExpYear,
      processingCurrency,
      amount,
      donationAmount,
      shippingAmount,
      promotionAmount,
      transId,
      transResult,
      transOrderRef,
      transMerchantProfile,
      memo,
      invoiceNo,
      isOutside,
      paymentId,
    });
  }

  /**
   * @param string - paymentId
   * @return Promise|Observable|any
   */
  DeletePayment(paymentId: string): any {
    return this.restClient.post('Payment/UseCase/DeletePayment', {
      paymentId,
    });
  }
}
