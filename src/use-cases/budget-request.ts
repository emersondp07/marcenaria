export class BudgetRequestUseCase {
  // constructor(private readonly resquestRepository: ResquestRepository) {}

  async execute(homeEnvironment: string, description: string): Promise<any> {
    console.log(homeEnvironment, description);
  }
}
