export class Globals {
  public static get APP_NAME(): string { return 'FFXIV Roster'; }
  public static get APP_TAB_TITLE(): string { return this.APP_NAME; }
  public static get APP_TAB_SEPERATOR(): string { return ' - '; }
  public static get APP_API(): string { return 'http://api.roster.fr'; }
  public static get APP_USER_TOKEN(): string { return 'id-Token'; }
  public static get APP_USER(): string { return 'id-user'; }
  public static get APP_ROSTER(): string { return 'id-roster'; }
}
