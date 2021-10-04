declare module "saga-toolkit" {
    function createSagaAction(string);
    interface putAsync {}
    function takeEveryAsync(string, Generator);
}
