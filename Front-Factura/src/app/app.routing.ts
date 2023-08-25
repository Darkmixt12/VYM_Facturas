import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/*componentes  */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { BorrarFacturaComponent } from './components/borrar-factura/borrar-factura.component';
import { DespachoFacturaComponent } from './components/despacho-factura/despacho-factura.component';
import { FacturasDespachoComponent } from './components/facturas-despacho/facturas-despacho.component';

/* definir rutas */

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'Despacho', component: DespachoFacturaComponent},
    {path: 'facturas', component: FacturasComponent},
    {path: 'Despacho-Facturas', component: FacturasDespachoComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);