class Time {
    private int hour   = 0;
    private int minute = 0;
    private int second = 0;

    public Time(int hour, int minute, int second) {
    }

    public void setHour(int hour) {
    }
    public void setMinute(int minute) {
    }
    public void setSecond(int second) {
    }
    public int getHour() {
        return 0;
    }
    public int getMinute() {
        return 0;
    }
    public int getSecond() {
        return 0;
    }
    public void nextSecond() {
    }
    public String toString() {
        return String.format("%02d:%02d:%02d", hour, minute, second);
    }
}