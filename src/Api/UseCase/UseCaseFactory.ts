import { RestClientInterface } from '../../RestClient/RestClientInterface';

import { Allotment } from './Allotment';
import { AppVersion } from './AppVersion';
import { BugReport } from './BugReport';
import { Canvas } from './Canvas';
import { DomainMask } from './DomainMask';
import { EmailDesign } from './EmailDesign';
import { EmailDesignType } from './EmailDesignType';
import { EmailMessage } from './EmailMessage';
import { EmailNotification } from './EmailNotification';
import { EmailSample } from './EmailSample';
import { EmailTemplate } from './EmailTemplate';
import { Event } from './Event';
import { Feature } from './Feature';
import { FeatureToggle } from './FeatureToggle';
import { Group } from './Group';
import { Import } from './Import';
import { Integration } from './Integration';
import { IntegrationFieldMapping } from './IntegrationFieldMapping';
import { IntegrationStatusMapping } from './IntegrationStatusMapping';
import { Interaction } from './Interaction';
import { Invitation } from './Invitation';
import { OAuth } from './OAuth';
import { Pool } from './Pool';
import { PoolContact } from './PoolContact';
import { PoolContract } from './PoolContract';
import { PoolFeature } from './PoolFeature';
import { Promotion } from './Promotion';
import { Queue } from './Queue';
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
import { User } from './User';
import { UserAddress } from './UserAddress';
import { UserAttribute } from './UserAttribute';
import { UserIdentifier } from './UserIdentifier';
import { UserName } from './UserName';

export class UseCaseFactory {
    constructor(private restClient: RestClientInterface) {}

    Allotment(): Allotment {
        return new Allotment(this.restClient);
    }

    AppVersion(): AppVersion {
        return new AppVersion(this.restClient);
    }

    BugReport(): BugReport {
        return new BugReport(this.restClient);
    }

    Canvas(): Canvas {
        return new Canvas(this.restClient);
    }

    DomainMask(): DomainMask {
        return new DomainMask(this.restClient);
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

    Feature(): Feature {
        return new Feature(this.restClient);
    }

    FeatureToggle(): FeatureToggle {
        return new FeatureToggle(this.restClient);
    }

    Group(): Group {
        return new Group(this.restClient);
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

    Interaction(): Interaction {
        return new Interaction(this.restClient);
    }

    Invitation(): Invitation {
        return new Invitation(this.restClient);
    }

    OAuth(): OAuth {
        return new OAuth(this.restClient);
    }

    Pool(): Pool {
        return new Pool(this.restClient);
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

    Promotion(): Promotion {
        return new Promotion(this.restClient);
    }

    Queue(): Queue {
        return new Queue(this.restClient);
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
}
