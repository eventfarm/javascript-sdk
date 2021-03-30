import { AppVersion } from './AppVersion';
import { EFx } from './EFx';
import { EmailDesign } from './EmailDesign';
import { EmailMessage } from './EmailMessage';
import { EmailTemplate } from './EmailTemplate';
import { Event } from './Event';
import { Import } from './Import';
import { Integration } from './Integration';
import { IntegrationFieldMapping } from './IntegrationFieldMapping';
import { IntegrationStatusMapping } from './IntegrationStatusMapping';
import { Invitation } from './Invitation';
import { Pool } from './Pool';
import { Promotion } from './Promotion';
import { Queue } from './Queue';
import { Region } from './Region';
import { Report } from './Report';
import { Salesforce } from './Salesforce';
import { Salutation } from './Salutation';
import { SitePage } from './SitePage';
import { Stack } from './Stack';
import { User } from './User';
import { Virbela } from './Virbela';
import { WebConference } from './WebConference';

export class TypeFactory {
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

  Pool(): Pool {
    return new Pool();
  }

  Promotion(): Promotion {
    return new Promotion();
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

  User(): User {
    return new User();
  }

  Virbela(): Virbela {
    return new Virbela();
  }

  WebConference(): WebConference {
    return new WebConference();
  }
}
