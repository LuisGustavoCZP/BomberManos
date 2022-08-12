export enum DeviceType {
    Mobile,
    Desktop
} 

class GameMedia 
{
    public type : DeviceType;

    constructor ()
    {
        if(this.isMobile ()) this.type = DeviceType.Mobile;
        else this.type = DeviceType.Desktop;
    }

    private isMobile ()
    {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
}

export default new GameMedia();