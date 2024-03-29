import { ActivityLog } from './ActivityLog';
import { AppVersion } from './AppVersion';
import { EFx } from './EFx';
import { EmailDesign } from './EmailDesign';
import { EmailMessage } from './EmailMessage';
import { EmailTemplate } from './EmailTemplate';
import { Event } from './Event';
import { Group } from './Group';
import { HealthPass } from './HealthPass';
import { Import } from './Import';
import { Integration } from './Integration';
import { IntegrationFieldMapping } from './IntegrationFieldMapping';
import { IntegrationStatusMapping } from './IntegrationStatusMapping';
import { Invitation } from './Invitation';
import { Lead } from './Lead';
import { Link } from './Link';
import { Mobile } from './Mobile';
import { Payment } from './Payment';
import { Pool } from './Pool';
import { Profile } from './Profile';
import { Promotion } from './Promotion';
import { Question } from './Question';
import { Queue } from './Queue';
import { Region } from './Region';
import { Report } from './Report';
import { Salesforce } from './Salesforce';
import { Salutation } from './Salutation';
import { SitePage } from './SitePage';
import { Stack } from './Stack';
import { TicketBlock } from './TicketBlock';
import { User } from './User';
import { Venue } from './Venue';
import { Virbela } from './Virbela';
import { WebConference } from './WebConference';

export class TypeFactory {
  ActivityLog(): ActivityLog {
    return new ActivityLog();
  }

  AppVersion(): AppVersion {
    return new AppVersion();
  }

  EFx(): EFx {
    return new EFx();
  }

  EmailDesign(): EmailDesign {
    return new EmailDesign();
  }

  EmailMessage(): EmailMessage {
    return new EmailMessage();
  }

  EmailTemplate(): EmailTemplate {
    return new EmailTemplate();
  }

  Event(): Event {
    return new Event();
  }

  Group(): Group {
    return new Group();
  }

  HealthPass(): HealthPass {
    return new HealthPass();
  }

  Import(): Import {
    return new Import();
  }

  Integration(): Integration {
    return new Integration();
  }

  IntegrationFieldMapping(): IntegrationFieldMapping {
    return new IntegrationFieldMapping();
  }

  IntegrationStatusMapping(): IntegrationStatusMapping {
    return new IntegrationStatusMapping();
  }

  Invitation(): Invitation {
    return new Invitation();
  }

  Lead(): Lead {
    return new Lead();
  }

  Link(): Link {
    return new Link();
  }

  Mobile(): Mobile {
    return new Mobile();
  }

  Payment(): Payment {
    return new Payment();
  }

  Pool(): Pool {
    return new Pool();
  }

  Profile(): Profile {
    return new Profile();
  }

  Promotion(): Promotion {
    return new Promotion();
  }

  Question(): Question {
    return new Question();
  }

  Queue(): Queue {
    return new Queue();
  }

  Region(): Region {
    return new Region();
  }

  Report(): Report {
    return new Report();
  }

  Salesforce(): Salesforce {
    return new Salesforce();
  }

  Salutation(): Salutation {
    return new Salutation();
  }

  SitePage(): SitePage {
    return new SitePage();
  }

  Stack(): Stack {
    return new Stack();
  }

  TicketBlock(): TicketBlock {
    return new TicketBlock();
  }

  User(): User {
    return new User();
  }

  Venue(): Venue {
    return new Venue();
  }

  Virbela(): Virbela {
    return new Virbela();
  }

  WebConference(): WebConference {
    return new WebConference();
  }
}
