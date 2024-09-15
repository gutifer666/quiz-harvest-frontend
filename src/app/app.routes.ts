import {Routes} from '@angular/router';
import {TestMakerComponent} from "./test/presentation/test-maker/test-maker.component";
import {DeskComponent} from "./test/presentation/desk/desk.component";
import {StudentRegisterComponent} from "./student/presentation/student-register/student-register.component";
import {StudentDashboardComponent} from "./student/presentation/student-dashboard/student-dashboard.component";

export const routes: Routes = [
    {path: '', component: TestMakerComponent},
    {path: 'student-registration', component: StudentRegisterComponent},
    {path: 'student-dashboard', component: StudentDashboardComponent},
    {path: 'test', component: DeskComponent}
];
