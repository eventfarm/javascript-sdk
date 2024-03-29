import { RestClientInterface } from '../../Interfaces';

import { ActivityLog } from './ActivityLog';
import { Allotment } from './Allotment';
import { Answer } from './Answer';
import { AppVersion } from './AppVersion';
import { BugReport } from './BugReport';
import { Campaign } from './Campaign';
import { Canvas } from './Canvas';
import { Country } from './Country';
import { DomainMask } from './DomainMask';
import { EFx } from './EFx';
import { EmailDesign } from './EmailDesign';
import { EmailDesignType } from './EmailDesignType';
import { EmailMessage } from './EmailMessage';
import { EmailNotification } from './EmailNotification';
import { EmailSample } from './EmailSample';
import { EmailTemplate } from './EmailTemplate';
import { Event } from './Event';
import { EventTheme } from './EventTheme';
import { Exhibitor } from './Exhibitor';
import { Feature } from './Feature';
import { FeatureToggle } from './FeatureToggle';
import { Group } from './Group';
import { HealthPass } from './HealthPass';
import { Import } from './Import';
import { Integration } from './Integration';
import { IntegrationFieldMapping } from './IntegrationFieldMapping';
import { IntegrationStatusMapping } from './IntegrationStatusMapping';
import { Invitation } from './Invitation';
import { Lead } from './Lead';
import { Link } from './Link';
import { Logi } from './Logi';
import { Mobile } from './Mobile';
import { OAuth } from './OAuth';
import { OAuth2 } from './OAuth2';
import { Payment } from './Payment';
import { PaymentGateway } from './PaymentGateway';
import { Pool } from './Pool';
import { PoolAllotment } from './PoolAllotment';
import { PoolContact } from './PoolContact';
import { PoolContract } from './PoolContract';
import { PoolFeature } from './PoolFeature';
import { PoolFile } from './PoolFile';
import { PoolImage } from './PoolImage';
import { PoolPaymentGateway } from './PoolPaymentGateway';
import { PoolWorld } from './PoolWorld';
import { Profile } from './Profile';
import { Promotion } from './Promotion';
import { Question } from './Question';
import { Queue } from './Queue';
import { Refund } from './Refund';
import { Region } from './Region';
import { Report } from './Report';
import { Salesforce } from './Salesforce';
import { SalesforceEventSetting } from './SalesforceEventSetting';
import { SalesforcePoolSetting } from './SalesforcePoolSetting';
import { Salutation } from './Salutation';
import { SitePage } from './SitePage';
import { Stack } from './Stack';
import { TicketBlock } from './TicketBlock';
import { TicketType } from './TicketType';
import { Track } from './Track';
import { Transaction } from './Transaction';
import { Transfer } from './Transfer';
import { User } from './User';
import { UserAddress } from './UserAddress';
import { UserAttribute } from './UserAttribute';
import { UserIdentifier } from './UserIdentifier';
import { UserName } from './UserName';
import { UserUnsubscribe } from './UserUnsubscribe';
import { Venue } from './Venue';
import { Virbela } from './Virbela';
import { VirbelaWorld } from './VirbelaWorld';
import { WebConference } from './WebConference';
import { Withdrawal } from './Withdrawal';

export class UseCaseFactory {
  constructor(private restClient: RestClientInterface) {}

  ActivityLog(): ActivityLog {
    return new ActivityLog(this.restClient);
  }

  Allotment(): Allotment {
    return new Allotment(this.restClient);
  }

  Answer(): Answer {
    return new Answer(this.restClient);
  }

  AppVersion(): AppVersion {
    return new AppVersion(this.restClient);
  }

  BugReport(): BugReport {
    return new BugReport(this.restClient);
  }

  Campaign(): Campaign {
    return new Campaign(this.restClient);
  }

  Canvas(): Canvas {
    return new Canvas(this.restClient);
  }

  Country(): Country {
    return new Country(this.restClient);
  }

  DomainMask(): DomainMask {
    return new DomainMask(this.restClient);
  }

  EFx(): EFx {
    return new EFx(this.restClient);
  }

  EmailDesign(): EmailDesign {
    return new EmailDesign(this.restClient);
  }

  EmailDesignType(): EmailDesignType {
    return new EmailDesignType(this.restClient);
  }

  EmailMessage(): EmailMessage {
    return new EmailMessage(this.restClient);
  }

  EmailNotification(): EmailNotification {
    return new EmailNotification(this.restClient);
  }

  EmailSample(): EmailSample {
    return new EmailSample(this.restClient);
  }

  EmailTemplate(): EmailTemplate {
    return new EmailTemplate(this.restClient);
  }

  Event(): Event {
    return new Event(this.restClient);
  }

  EventTheme(): EventTheme {
    return new EventTheme(this.restClient);
  }

  Exhibitor(): Exhibitor {
    return new Exhibitor(this.restClient);
  }

  Feature(): Feature {
    return new Feature(this.restClient);
  }

  FeatureToggle(): FeatureToggle {
    return new FeatureToggle(this.restClient);
  }

  Group(): Group {
    return new Group(this.restClient);
  }

  HealthPass(): HealthPass {
    return new HealthPass(this.restClient);
  }

  Import(): Import {
    return new Import(this.restClient);
  }

  Integration(): Integration {
    return new Integration(this.restClient);
  }

  IntegrationFieldMapping(): IntegrationFieldMapping {
    return new IntegrationFieldMapping(this.restClient);
  }

  IntegrationStatusMapping(): IntegrationStatusMapping {
    return new IntegrationStatusMapping(this.restClient);
  }

  Invitation(): Invitation {
    return new Invitation(this.restClient);
  }

  Lead(): Lead {
    return new Lead(this.restClient);
  }

  Link(): Link {
    return new Link(this.restClient);
  }

  Logi(): Logi {
    return new Logi(this.restClient);
  }

  Mobile(): Mobile {
    return new Mobile(this.restClient);
  }

  OAuth(): OAuth {
    return new OAuth(this.restClient);
  }

  OAuth2(): OAuth2 {
    return new OAuth2(this.restClient);
  }

  Payment(): Payment {
    return new Payment(this.restClient);
  }

  PaymentGateway(): PaymentGateway {
    return new PaymentGateway(this.restClient);
  }

  Pool(): Pool {
    return new Pool(this.restClient);
  }

  PoolAllotment(): PoolAllotment {
    return new PoolAllotment(this.restClient);
  }

  PoolContact(): PoolContact {
    return new PoolContact(this.restClient);
  }

  PoolContract(): PoolContract {
    return new PoolContract(this.restClient);
  }

  PoolFeature(): PoolFeature {
    return new PoolFeature(this.restClient);
  }

  PoolFile(): PoolFile {
    return new PoolFile(this.restClient);
  }

  PoolImage(): PoolImage {
    return new PoolImage(this.restClient);
  }

  PoolPaymentGateway(): PoolPaymentGateway {
    return new PoolPaymentGateway(this.restClient);
  }

  PoolWorld(): PoolWorld {
    return new PoolWorld(this.restClient);
  }

  Profile(): Profile {
    return new Profile(this.restClient);
  }

  Promotion(): Promotion {
    return new Promotion(this.restClient);
  }

  Question(): Question {
    return new Question(this.restClient);
  }

  Queue(): Queue {
    return new Queue(this.restClient);
  }

  Refund(): Refund {
    return new Refund(this.restClient);
  }

  Region(): Region {
    return new Region(this.restClient);
  }

  Report(): Report {
    return new Report(this.restClient);
  }

  Salesforce(): Salesforce {
    return new Salesforce(this.restClient);
  }

  SalesforceEventSetting(): SalesforceEventSetting {
    return new SalesforceEventSetting(this.restClient);
  }

  SalesforcePoolSetting(): SalesforcePoolSetting {
    return new SalesforcePoolSetting(this.restClient);
  }

  Salutation(): Salutation {
    return new Salutation(this.restClient);
  }

  SitePage(): SitePage {
    return new SitePage(this.restClient);
  }

  Stack(): Stack {
    return new Stack(this.restClient);
  }

  TicketBlock(): TicketBlock {
    return new TicketBlock(this.restClient);
  }

  TicketType(): TicketType {
    return new TicketType(this.restClient);
  }

  Track(): Track {
    return new Track(this.restClient);
  }

  Transaction(): Transaction {
    return new Transaction(this.restClient);
  }

  Transfer(): Transfer {
    return new Transfer(this.restClient);
  }

  User(): User {
    return new User(this.restClient);
  }

  UserAddress(): UserAddress {
    return new UserAddress(this.restClient);
  }

  UserAttribute(): UserAttribute {
    return new UserAttribute(this.restClient);
  }

  UserIdentifier(): UserIdentifier {
    return new UserIdentifier(this.restClient);
  }

  UserName(): UserName {
    return new UserName(this.restClient);
  }

  UserUnsubscribe(): UserUnsubscribe {
    return new UserUnsubscribe(this.restClient);
  }

  Venue(): Venue {
    return new Venue(this.restClient);
  }

  Virbela(): Virbela {
    return new Virbela(this.restClient);
  }

  VirbelaWorld(): VirbelaWorld {
    return new VirbelaWorld(this.restClient);
  }

  WebConference(): WebConference {
    return new WebConference(this.restClient);
  }

  Withdrawal(): Withdrawal {
    return new Withdrawal(this.restClient);
  }
}
