class Solution():
    def get_stair_combinations(self, step_number:int):
        return self.get_stair_combinations_helper(steps_remaining=step_number, step_count=1) + self.get_stair_combinations_helper(steps_remaining=step_number, step_count=2)
    
    def get_stair_combinations_helper(self, steps_remaining, step_count):
        steps_remaining=steps_remaining-step_count
        if(steps_remaining == 0):
            return 1
        
        if(steps_remaining < 0):
            return 0
        
        return self.get_stair_combinations_helper(steps_remaining=steps_remaining, step_count=1) + self.get_stair_combinations_helper(steps_remaining=steps_remaining, step_count=2)
        


