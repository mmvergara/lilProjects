class TicTacToe:
    CurrentPlayer = 'X'
    PlayerX = []
    PlayerO = []
    Board = ['1','2','3','4','5','6','7','8','9',]
    AvailableSpots = [1,2,3,4,5,6,7,8,9]
    winningConditions = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        
        [1,4,7],
        [2,5,8],
        [3,6,9],
        
        [1,5,9],
        [3,7,5],
    ]    
    GameNotEnded = True
    def __init__(self):
        self.display_board()
        self.start_game()
        pass
    
    def start_game(self):
        while(self.GameNotEnded):
            print(f'It\'s player {self.CurrentPlayer} turn!')

            while(True):
                userInput = input(f'where would you like to place your \'{self.CurrentPlayer}\' : ')
                
                if(userInput.isdigit() == False):
                    print('invalid input! try again')
                    continue
                
                if(int(userInput) not in self.AvailableSpots):
                    print('That spot is occupied')
                    continue
                
                self.AvailableSpots.remove(int(userInput))
                if(self.CurrentPlayer == 'X'):
                    self.Board[int(userInput)-1] = "X"
                    self.CurrentPlayer = 'O'
                    self.PlayerX.append(int(userInput))
                    self.display_board()
                else:
                    self.Board[int(userInput)-1] = "O"
                    self.CurrentPlayer = 'X'
                    self.PlayerO.append(int(userInput))
                    self.display_board()
                break
                

            if(self.did_won(self.PlayerO)):
                print('===== Player 0 won ===== \n')
                self.GameNotEnded = False
                self.reset_question()
                break
                
            if(self.did_won(self.PlayerX)):
                print('===== Player X won ===== \n')
                self.GameNotEnded = False
                self.reset_question()
                break
            
            if(len(self.PlayerX) + len(self.PlayerO)) == 9:
                print('Game Draw! \n')
                self.reset_question()
                break
            
    def display_board(self):
        print('\n')
        print("=====",self.Board[0],self.Board[1],self.Board[2],"=====")
        print("=====",self.Board[3],self.Board[4],self.Board[5],"=====")
        print("=====",self.Board[6],self.Board[7],self.Board[8],"=====")
        print('\n')
        
    def reset_game_playagain(self):
        self.CurrentPlayer = 'X'
        self.PlayerX = []
        self.PlayerO = []
        self.Board = ['1','2','3','4','5','6','7','8','9',]
        self.AvailableSpots = [1,2,3,4,5,6,7,8,9]
        self.GameNotEnded = True
        self.start_game()
    
    def did_won(self,playerArray):
        return any(all(x in playerArray for x in wc) for wc in self.winningConditions)
        
    def reset_question(self):
        while True:
            userInput = input('Press Y if you want to play again, press enter if you want to end')
            if userInput in ['Y','y']:
                self.reset_game_playagain()
                break
            break
            

        
        
game = TicTacToe()